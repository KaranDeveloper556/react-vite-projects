import React from 'react'

const Login_page = () => {
    return (
        <section className="form">
            <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"> Add User</h4>
                <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
                    <div className="flex flex-col gap-6 mb-1">
                        <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            User Name :
                        </h6>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input placeholder="name" name="name" type="text" className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                        </div>
                        <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            User Age :
                        </h6>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input placeholder="36,67,25 etc." name="age" type="number" className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                        </div>
                        <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            User Email :
                        </h6>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input placeholder="name@mail.com" type="text" name="email"
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                        </div>
                        <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            User Number :
                        </h6>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input placeholder="43567835754" type="number" name="number"
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                        </div>
                    </div>
                    <button className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit"> ADD</button>
                </form>
            </div>
        </section>
    )
}

export default Login_page