import { CheckoutResume } from './components';

export default function CheckoutPage() {
  return (
    <main className="flex flex-col gap-6 lg:grid grid-cols-2">
      <div className="py-32 lg:px-48">
        <div className="flex flex-col gap-6 bg-neutral-white border border-neutral-border rounded-2xl py-6 px-16 lg:bg-none lg:border-none">
          {/* {Forms[step]} */}
        </div>
        {/* <div className=" py-6 px-16 flex flex-col gap-6">
          {!isInContactInfo && (
            <>
              <hr className="border border-t-[1px] border-neutral-border" />
              <ContactInfoStepResume />
            </>
          )}
          {!isInShippingForm && (
            <>
              <hr className="border border-t-[1px] border-neutral-border" />
              <ShippingInfoStepResume />
            </>
          )}
          {!isInPaymentMethods && (
            <>
              <hr className="border border-t-[1px] border-neutral-border" />
              <PaymentMethodsStepResume />
            </>
          )}
        </div> */}
      </div>
      <CheckoutResume />
    </main>
  );
}
