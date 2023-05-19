import { useState } from "react";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const handleClick = (index) => {
        setExpandedIndex((currentExtendedIndex) => {
            return (currentExtendedIndex === index) ? null : index
        })
    } 
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = <span className="text-xl">
            {isExpanded ? '\\/' : '>'}
        </span>;
        return (
            <div key={item.id}>
                <div 
                    className="flex justify-between p-3 bg-grey-50 border-b items-center cursor-pointer" 
                    onClick={() => handleClick(index)}
                >
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    })
    return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
