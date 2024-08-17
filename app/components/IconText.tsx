import React from 'react';

interface IconTextProps {
    icon: React.ReactNode; // The icon component
    text: string; // The text to display
    flexRow?: boolean; // Flex direction, default is 'row'
    gap?: string; // Gap between icon and text, default is '2'
    textSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

const IconText: React.FC<IconTextProps> = ({
    icon, // Destructure icon as a component
    text,
    flexRow = true,
    gap = '2',
    textSize = 'base'
}) => {
    const flexType = flexRow ? "flex-row" : "flex-col";
    const gapSize = "gap-" + gap;
    const textSizeClass = `text-${textSize}`;
    return (
        <div className={`flex ${flexType} ${gapSize} ${textSizeClass} items-center justify-center w-full ` }>
            {icon}
            <p>{text}</p>
        </div>
    );
};

export default IconText;
