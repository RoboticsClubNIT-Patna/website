import { icons } from 'lucide-react';

const Icon = ({ name, color, size, ...rest }) => {
    const LucideIcon = icons[name];

    return <LucideIcon {...rest} color={color} size={size} />;
};

export default Icon;