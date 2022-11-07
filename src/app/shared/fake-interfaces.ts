export interface PurchaseOrderHeader {
  Status: string
}


export enum PurchaseOrderStatus {
  PENDING
}


export interface SearchPurchaseOrdersRequest {
  Status: PurchaseOrderStatus
}
