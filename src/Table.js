
import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { getCustomersMedium } from './service/CustomerService';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
export default function BasicFilterDemo() {
    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        firstName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'lastName': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        currentAddress: { value: null, matchMode: FilterMatchMode.CONTAINS },
        phoneNumber: { value: null, matchMode: FilterMatchMode.CONTAINS },
        mailingAddress: { value: null, matchMode: FilterMatchMode.CONTAINS },
        policyNumber: { value: null, matchMode: FilterMatchMode.CONTAINS },
        subscribeId: { value: null, matchMode: FilterMatchMode.CONTAINS },
        doNotEmail: { value: null, matchMode: FilterMatchMode.CONTAINS },
        doNotEmailCode: { value: null, matchMode: FilterMatchMode.CONTAINS },
        doNotCall: { value: null, matchMode: FilterMatchMode.CONTAINS },
        doNotCallCode: { value: null, matchMode: FilterMatchMode.CONTAINS },
        doNotMail: { value: null, matchMode: FilterMatchMode.CONTAINS },
        doNotMailCode: { value: null, matchMode: FilterMatchMode.CONTAINS },
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

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <span>{rowData.lastName}</span>
            </div>
        );
    };

    const addressBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <span>{rowData.currentAddress}</span>
            </div>
        );
    };

    const phoneNumberTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <span>{rowData.phoneNumber}</span>
            </div>
        );
    };

    const mailingAddressTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <span>{rowData.mailingAddress}</span>
            </div>
        );
    };

    const policyNumberTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <span>{rowData.policyNumber}</span>
            </div>
        );
    };

    const subscribeIdTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <span>{rowData.subscribeId}</span>
            </div>
        );
    };

    const DoNotEmailTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <span>{rowData.doNotEmail}</span>
            </div>
        );
    };

    const DoNotEmailCodeTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <span>{rowData.doNotEmailCode}</span>
            </div>
        );
    };

    const doNotCallTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <span>{rowData.doNotCall}</span>
            </div>
        );
    };

    const doNotCallCodeTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <span>{rowData.doNotCallCode}</span>
            </div>
        );
    };

    const doNotMailTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <span>{rowData.doNotMail}</span>
            </div>
        );
    };

    const doNotMailCodeTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <span>{rowData.doNotMailCode}</span>
            </div>
        );
    };

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                  emptyMessage="No customers found.">
                <Column field="firstName" header="firstName" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                <Column header="lastName" filterField="lastName" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by lastName" />
                <Column header="currentAddress" filterField="currentAddress" style={{ minWidth: '12rem' }} body={addressBodyTemplate} filter filterPlaceholder="Search by currentAddress" />
                <Column header="phoneNumber" filterField="phoneNumber" style={{ minWidth: '12rem' }} body={phoneNumberTemplate} filter filterPlaceholder="Search by phoneNumber" />
                <Column header="mailingAddress" filterField="mailingAddress" style={{ minWidth: '12rem' }} body={mailingAddressTemplate} filter filterPlaceholder="Search by mailingAddress" />
                <Column header="policyNumber" filterField="policyNumber" style={{ minWidth: '12rem' }} body={policyNumberTemplate} filter filterPlaceholder="Search by policyNumber" />
                <Column header="subscribeId" filterField="subscribeId" style={{ minWidth: '12rem' }} body={subscribeIdTemplate} filter filterPlaceholder="Search by subscribeId" />
                <Column header="doNotEmail" filterField="doNotEmail" style={{ minWidth: '12rem' }} body={DoNotEmailTemplate} filter filterPlaceholder="Search by DoNotEmail" />
                <Column header="doNotEmailCode" filterField="doNotEmailCode" style={{ minWidth: '12rem' }} body={DoNotEmailCodeTemplate} filter filterPlaceholder="Search by DoNotEmailCode" />
                <Column header="doNotCall" filterField="doNotCall" style={{ minWidth: '12rem' }} body={doNotCallTemplate} filter filterPlaceholder="Search by doNotCall" />
                <Column header="doNotCallCode" filterField="doNotCallCode" style={{ minWidth: '12rem' }} body={doNotCallCodeTemplate} filter filterPlaceholder="Search by doNotCallCode" />
                <Column header="doNotMail" filterField="doNotMail" style={{ minWidth: '12rem' }} body={doNotMailTemplate} filter filterPlaceholder="Search by doNotMail" />
                <Column header="doNotMailCode" filterField="doNotMailCode" style={{ minWidth: '12rem' }} body={doNotMailCodeTemplate} filter filterPlaceholder="Search by doNotMailCode" />

            </DataTable>
        </div>
    );
}
