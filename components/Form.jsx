import Link from "next/link";

const Form = ({ type, add, setAdd, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Vendor Profile</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} profile and start streamlining your vendor operations today with
        Vendor Management System!
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 mb-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Vendor Name <span className="text-red-600">*</span>
          </span>
          <input
            value={add.VendorName}
            onChange={(e) => setAdd({ ...add, VendorName: e.target.value })}
            placeholder="Enter Vendor's Name here..."
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Bank Account No. <span className="text-red-600">*</span>
          </span>
          <input
            value={add.BankAccountNo}
            onChange={(e) => setAdd({ ...add, BankAccountNo: e.target.value })}
            placeholder="Enter Bank Account No. here..."
            required
            type="number"
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Bank Name <span className="text-red-600">*</span>
          </span>
          <input
            value={add.BankName}
            onChange={(e) => setAdd({ ...add, BankName: e.target.value })}
            placeholder="Enter Bank Name here..."
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Address Line 1 <span className="text-red-600">*</span>
          </span>
          <input
            value={add.adl1}
            onChange={(e) => setAdd({ ...add, adl1: e.target.value })}
            placeholder="Enter Address Line 1 here..."
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Address Line 2 <span className="text-red-600">*</span>
          </span>
          <input
            value={add.adl2}
            onChange={(e) => setAdd({ ...add, adl2: e.target.value })}
            placeholder="Enter Address Line 1 here..."
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            City <span className="text-red-600">*</span>
          </span>
          <input
            value={add.city}
            onChange={(e) => setAdd({...add, city: e.target.value})}
            placeholder="Enter City here..."
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Country <span className="text-red-600">*</span>
          </span>
          <input
            value={add.country}
            onChange={(e) => setAdd({...add, country: e.target.value})}
            placeholder="Enter Country here..."
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Zip Code <span className="text-red-600">*</span>
          </span>
          <input
            value={add.zipCode}
            onChange={(e) => setAdd({...add, zipCode: e.target.value})}
            placeholder="Enter Zip Code here..."
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href='/' className="text-gray-500" text-sm>
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>

        </div>
      </form>
    </section>
  );
};

export default Form;
