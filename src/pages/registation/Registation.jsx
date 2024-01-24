import { useForm } from "react-hook-form";
import axios from "axios";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://house-hunter-server-nu.vercel.app/api/register",
        data
      );
      console.log(response); // Log the entire response object
      console.log(response.data); // Log the data property
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="full name"
                className="input input-bordered"
                {...register("fullName", {
                  required: "This field is required",
                })}
              />
              {errors.fullName && (
                <p className="text-error">{errors.fullName.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select className="text-sm" {...register("role")}>
                <option value="houseOwner">House Owner</option>
                <option value="houseRenter">House Renter</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="phone"
                placeholder="phone number"
                className="input input-bordered"
                {...register("phone", {
                  required: "This field is required",
                  pattern: {
                    value: /^[0-9]{11}$/, // Assuming Bangladeshi phone number format
                    message: "Invalid phone number",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-error">{errors.phone.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-error">{errors.email.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password", {
                  required: "This field is required",
                })}
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-error">{errors.password.message}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
