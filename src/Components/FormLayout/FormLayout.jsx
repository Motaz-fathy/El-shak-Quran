import useLocalizationContext from "../../Context/localizationContext/localizationContext";
import useLocalization from "../../hooks/useTranslation";
import logo from "../../assets/images/iconHeader/logo.png";
import PropTypes from "prop-types";

const FormLayout = ({ onSubmit, children, title }) => {
    const content = useLocalization("auth");
    const { isEnglish } = useLocalizationContext();

    const socialMediaLogin = [
        {
            bg: "#3B5998",
            text: content("socialLogin.login_with_facebook"),
            path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
        },
        {
            bg: "#00ACED",
            text: content("socialLogin.login_with_twitter"),
            path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
        },
        {
            bg: "#C32F10",
            text: content("socialLogin.login_with_google"),
            path: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
        },
    ];

    return (
        <div className="flex items-center justify-center md:flex-row-reverse flex-col my-5 md:my-0 gap-y-3">
            <div className="box w-[400px]">
                {/* Form Section */}
                <div className="w-full flex items-center justify-center bg-[--main-green-color] rounded-lg max-w-md">
                    <div className="h-[500px] sm:p-8 rounded-lg text-white justify-center text-center">
                        <div className="bg-[#157A67] p-8 text-white">
                            <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
                            <form
                                className="space-y-6 bg-[#157A67]"
                                dir={isEnglish ? "ltr" : "rtl"}
                                onSubmit={onSubmit}
                            >
                                {children}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logo and Social Media Section */}
            <div className="w-full max-w-md sm:p-8 flex flex-col items-center justify-center bg-[--main-bgLight-color] rounded-lg">
                <img src={logo} alt="Company logo" className="mb-6 sm:mb-8 max-w-[200px] w-full" />
                <p className="text-center text-[--main-green-color] mb-6">
                    {content("socialLogin.social_login_prompt")}
                </p>
                <div className="space-y-3 w-full">
                    {socialMediaLogin.map((item, index) => (
                        <button
                            key={index}
                            style={{ backgroundColor: item.bg }}
                            className="w-full flex items-center justify-center gap-2 text-white rounded-md px-3 py-2 transition-colors text-sm sm:text-base"
                        >
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d={item.path} />
                            </svg>
                            {item.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

FormLayout.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default FormLayout;
