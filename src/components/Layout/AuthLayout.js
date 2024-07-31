import { ReactNode } from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <div className="h-screen xs:hidden sm:hidden md:flex lg:flex xl:flex md:pl-[90px] lg:pl-[90px] xl:pl-[90px] justify-center items-center hidden">
          {/* <Image
            priority
            src={IconService.person_with_bus.src}
            width={1003}  
            height={435}
            alt="Follow us on Twitter"
          /> */}
        </div>
        <div className="h-screen flex justify-center items-center">
          <div className="auth-main-section flex-1">
            <div className="flex flex-col gap-[33px]">
              <div className="m-auto">
                {/* <Image
                  src={IconService.loginex_auth_logo.src}
                  width={296}
                  height={42}
                  alt=""
                /> */}
              </div>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
