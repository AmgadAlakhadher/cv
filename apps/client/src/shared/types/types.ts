export enum request_status{
    WAITING="WAITING",
    IN_PROCESSING="IN_PROCESSING",
    DONE="DONE"
}
export enum Role{
    SELLER_ONLINE_STORE = 'SELLER_ONLINE_STORE',
    SELLER_MARKETPLACE = 'SELLER_MARKETPLACE',
}
export enum ShowPage {
    ADD,
    ALL,
    EDIT,
}
export interface CustomerType{
    id: string,
    name: string,
    email: string,
    role: Role,
    phone: string,
    city: string,
    qty_requests?: number,
}
export interface RequestType{
    id: string;
    qty_worker: number;
    workerId: string;
    qty_request: number;
    customerId: string;
    paid: number;
    status: request_status;
    expenses?: number;
    comment?: string;
    reimbursement?: number;
    created_at?: React.ReactNode;
    finshed_at?: React.ReactNode;	
    product: {
        barcode: string,
        name?: string,
    };
    worker: {
        name: string,
    };
}
export interface RequestsCustomer{
    requestId: string;
    workerName: string;
    barcode: string;
    productName: string;
    qty_request: number;
    qty_worker: number;
    paid: number;
    expenses: number;
    reimbursement: number;
    comment: string;
    status: string;
    created_at: React.ReactNode;
    finshed_at: React.ReactNode;
}
export interface RequestType_worker{
    id : string;
    product: {
        barcode: string,
        name: string,
    };
    qty_request: number;
    qty_worker: number;
}
// type get requests
// worker
export interface RequestsType_worker{
    name: string;
    id : string;
}
export interface ProductType {
    id: string;
    name: string;
    description: string;
    color?: string;
    size?: string;
    barcode: string;
}