
import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { InputText } from 'primereact/inputtext';
import { getCustomersMedium } from './service/CustomerService';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
export default function BasicFilterDemo() {
    const statusCellTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    }

    const [customers, setCustomers] = useState(null);
    const [showStatus, setShowStatus] = useState(false);
    const [sortData, setSortData] = useState();
   
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        firstName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        lastName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        currentAddress: { value: null, matchMode: FilterMatchMode.CONTAINS },
        phoneNumber: { value: null, matchMode: FilterMatchMode.CONTAINS },
        mailingAddress: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCustomersMedium().then((data) => {
            setCustomers(getCustomers(data));
            setLoading(false);
        });
    }, []); 

    const getCustomers = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);

            return d;
        });
    };

    const mailingAddressTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <a href={'mailto:'+rowData.mailingAddress}>{rowData.mailingAddress}</a>
            </div>
        );
    };

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    

    const addRow = () => {
        setCustomers([...customers, {
            "id": 1000,
            "firstName": "James",
            "lastName":"Butt",
            "country": {
                "name": "Algeria",
                "code": "dz"
            },
            "phoneNumber":"9871235467",
            "mailingAddress":"test1@gmail",
            "policyNumber":"3",
            "subscribeId":"IJHBVBNM",
            "currentAddress": "Benton, John B Jr",
            "date": "2015-09-13T00:00:00.000Z",
            "status": "unqualified",
            "verified": true,
            "activity": 17,
            "representative": {
                "name": "Ioni Bowcher",
                "image": "ionibowcher.png"
            },
            "balance": 70663
        }]);
    }

    return (
        <div className="card">
            { sortData ? <p> Sorted Acc to: {sortData.sortField} {sortData.sortOrder == 1 ? 'ASC' : 'DESC'}</p> : null }
            <DataTable sortField={sortData?.sortField} sortOrder={sortData?.sortOrder} onSort={(event) => { setSortData({sortField: event.sortField, sortOrder: event.sortOrder })}} value={customers} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                  emptyMessage="No customers found.">
                <Column field="firstName" header="FirstName" filter filterPlaceholder="Search by name" sortable style={{ minWidth: '12rem' }} />
                <Column field="lastName" header="LastName" filter filterField='lastName' sortable filterPlaceholder="Lastname" style={{ minWidth: '12rem' }} />
                <Column header="Address" field="currentAddress" filterField="currentAddress" sortable style={{ minWidth: '12rem' }}  filter filterPlaceholder="Search by currentAddress" />
                <Column header="Phone Number" field="phoneNumber" filterField="phoneNumber" sortable style={{ minWidth: '12rem' }}  filter filterPlaceholder="Search by phoneNumber" />
                <Column header="Email" field="mailingAddress" filterField="mailingAddress" style={{ minWidth: '12rem' }} sortable filter filterPlaceholder="Search by mailingAddress" />
                { showStatus ? <Column header="Status" field="status" filter filterField="status" sortable  body={statusCellTemplate} /> : null }
                
            </DataTable>
            <button onClick={() => addRow()}>Add Row</button>
            <button onClick={() => setShowStatus(!showStatus)}> { (showStatus ? 'Hide' : 'Show') + ' Status' }</button>
        </div>
        
    );
}
