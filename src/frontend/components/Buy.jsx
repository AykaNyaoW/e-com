import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "../shadcn/alert-dialog"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/frontend/shadcn/select"

function Buy() {
    return(
        <div>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Select Payment Method</AlertDialogTitle>
                    <AlertDialogDescription>

                        {/* Dropdown menu for payment method */}
                        <Select>
                            <SelectTrigger className="w-[200px] font-bold border-black border-2 text-black">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="cod">Cash on Delivery</SelectItem>
                                <SelectItem value="gcash">Gcash</SelectItem>
                                <SelectItem value="paypal">Paypal</SelectItem>
                            </SelectContent>
                        </Select>
                        <p></p>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Confirm</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </div>
    )
}

export default Buy