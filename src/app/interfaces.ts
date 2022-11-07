import "./shared/fake-interfaces"
export interface Printer {
  PrinterLocalName: string
  PrinterLocationName: string
  PrinterName: string
  Status: "ONLINE" | "OFFLINE" | "ERROR"
  Printer?: string
}
