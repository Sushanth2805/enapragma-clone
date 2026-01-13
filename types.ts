export interface NavLink {
    label: string;
    href: string;
}

export interface MetricCardProps {
    title: string;
    value: string;
    change?: string;
    isPositive?: boolean;
}
