#!/bin/bash

# Production Deployment Helper Script
# This script prepares and tests your application for Vercel deployment

echo "🚀 Ena Pragma Production Deployment Helper"
echo "========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Check if .env file exists and is clean
if [ -f .env ]; then
    if grep -q "API_KEY\|GEMINI\|SECRET" .env; then
        echo "⚠️  WARNING: .env file contains sensitive data. Please clean it before deployment."
        echo "Run: rm .env (safe to delete, use .env.local for local development)"
    else
        echo "✅ .env file is clean (no sensitive data detected)"
    fi
fi
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi
echo "✅ Dependencies installed"
echo ""

# Run TypeScript check
echo "🔍 Checking TypeScript..."
npx tsc --noEmit
if [ $? -ne 0 ]; then
    echo "⚠️  TypeScript errors found. Please fix them before deploying."
    exit 1
fi
echo "✅ TypeScript check passed"
echo ""

# Build for production
echo "🏗️  Building for production..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi
echo "✅ Production build successful"
echo ""

# Check build output
if [ -d "dist" ]; then
    echo "📊 Build output size:"
    du -sh dist
    echo ""
    echo "📋 Build contents:"
    ls -lah dist
else
    echo "❌ dist folder not created"
    exit 1
fi
echo ""

# Summary
echo "========================================="
echo "✅ APPLICATION IS READY FOR DEPLOYMENT!"
echo "========================================="
echo ""
echo "Next steps:"
echo "1. Push to GitHub: git push origin main"
echo "2. Go to vercel.com and import your repository"
echo "3. Vercel will automatically detect Vite"
echo "4. Click 'Deploy'"
echo ""
echo "To test locally:"
echo "  npm run preview"
echo ""
