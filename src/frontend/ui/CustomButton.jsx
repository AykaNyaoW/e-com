import { Button } from "@/frontend/shadcn/button"

function CustomButton({children}) {
    return (
      <div>
        <Button className="bg-primary-orange">
          {children}
        </Button>
      </div>
      )
}

export default CustomButton