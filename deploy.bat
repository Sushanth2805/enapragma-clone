@echo off
REM Production Deployment Helper Script for Windows
REM This script prepares and tests your application for Vercel deployment

echo.
echo 🚀 Ena Pragma Production Deployment Helper
echo =========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js version: %NODE_VERSION%

for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo ✅ npm version: %NPM_VERSION%
echo.

REM Check if .env file exists
if exist .env (
    echo ✅ .env file found
    findstr /m "API_KEY GEMINI SECRET" .env >nul
    if not errorlevel 1 (
        echo ⚠️  WARNING: .env file contains sensitive data
        echo Run: del .env (safe to delete, use .env.local for local development)
    ) else (
        echo ✅ .env file is clean
    )
) else (
    echo ℹ️  No .env file found (this is OK)
)
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install
if errorlevel 1 (
    echo ❌ Failed to install dependencies
    exit /b 1
)
echo ✅ Dependencies installed
echo.

REM Run TypeScript check
echo 🔍 Checking TypeScript...
call npx tsc --noEmit
if errorlevel 1 (
    echo ⚠️  TypeScript errors found. Please fix them before deploying.
    exit /b 1
)
echo ✅ TypeScript check passed
echo.

REM Build for production
echo 🏗️  Building for production...
call npm run build
if errorlevel 1 (
    echo ❌ Build failed
    exit /b 1
)
echo ✅ Production build successful
echo.

REM Check build output
if exist dist (
    echo 📋 Build output created in 'dist' folder
    echo.
    dir dist
) else (
    echo ❌ dist folder not created
    exit /b 1
)
echo.

REM Summary
echo =========================================
echo ✅ APPLICATION IS READY FOR DEPLOYMENT!
echo =========================================
echo.
echo Next steps:
echo 1. Push to GitHub: git push origin main
echo 2. Go to vercel.com and import your repository
echo 3. Vercel will automatically detect Vite
echo 4. Click 'Deploy'
echo.
echo To test locally:
echo   npm run preview
echo.
pause
