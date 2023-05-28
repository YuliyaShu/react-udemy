import Table from "../components/Table";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
    const { data, config } = props
    const { sortedData, sortBy, sortOrder, setSortColumn } = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        };

        return {
            ...column,
            header: () => <th onClick={() => setSortColumn(column.label)}>
                {getIcons(column.label, sortBy, sortOrder)}
                {column.label} 
            </th>
        }
    });

    return <Table 
        {...props} 
        data={sortedData} 
        config={updatedConfig} />
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return '\\//\\';
    }

    if (sortOrder === null) {
        return;
    } else if (sortOrder === 'asc') {
        return '\\/'
    } else if (sortOrder === 'desc') {
        return '/\\'
    }
}

export default SortableTable;
