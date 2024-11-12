import Employee from "../UIContainer/Employee";

const EmployeeContainer = () => {

    const handleRowClick = (rowData) => {
        console.log(rowData);
    }

    return(
        <Employee handleRowClick={handleRowClick}/>
    )
}

export default EmployeeContainer;