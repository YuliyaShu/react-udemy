import Table from "../components/Table";

function TablePage() {
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 1 },
        { name: 'Kiwi', color: 'bg-green-500', score: 2 },
        { name: 'Banana', color: 'bg-yellow-500', score: 3 },
        { name: 'Apple', color: 'bg-red-500', score: 4 },
    ];
    const config = [
        { 
            label: 'Fruit',
            render: (fruit) => fruit.name,    
        },
        { 
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,   
        },
        { 
            label: 'Score',
            render: (fruit) => fruit.score,  
            sortValue: (fruit) => <th className="bg-red-500">Score</th> 
        },
    ];
    const keyFn = (fruit) => {
        return fruit.name;
    }
    return <div><Table keyFn={keyFn} config={config} data={data}/></div>
}

export default TablePage;
