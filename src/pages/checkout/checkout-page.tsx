import CartView from "@/components/checkout-page/cart-view"
import CheckoutForm from "@/components/checkout-page/checkout-form"
import SideNav from "@/components/nav/sidenav/sidenav"
import TopNav from "@/components/nav/topnav/topnav"

export default function CheckoutPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <SideNav />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <TopNav />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="flex flex-row">
            <div style={{ width: "45%" }} className="m-2">
              <CheckoutForm />
            </div>
            <div style={{ width: "45%" }} className="m-2">
              <CartView />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
