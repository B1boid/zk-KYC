const Table = ({ data, emojiData }) => {
    const renderTableHeader = () => {
        return (
            <tr>
                <th className="border px-4 py-2">f1</th>
                <th className="border px-4 py-2">f2</th>
                <th className="border px-4 py-2">f3</th>
                <th className="border px-4 py-2">f4</th>
                <th className="border px-4 py-2">f5</th>
            </tr>
        );
    };

    const renderTableData = () => {
        return (
            <tr>
                {Object.entries(data).map(([key, value]) => (
                    <td key={key} className="border px-4 py-2">
                        {value} {!emojiData[key] ? '✅' : '❌'}
                    </td>
                ))}
            </tr>
        );
    };

    return (
        <table className="table-auto border-collapse">
            <thead>{renderTableHeader()}</thead>
            <tbody>{renderTableData()}</tbody>
        </table>
    );
};

export default Table;