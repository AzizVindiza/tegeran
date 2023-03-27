import React from 'react';
import "./FormSection.scss"
import {useForm} from "react-hook-form";
import ky from "ky";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Btn from "../../../components/Btn/Btn";

const FormSection = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm({mode: "onChange"})

    const feedback = async (data) => {
        try {
            await ky.post("https://mtk-smart.herokuapp.com/feedback/", {json: data})
                .json()
            toast.success("Контакты успешно отправлены!");
            reset()
        } catch (error) {
            console.log(error.message)
            toast.error("Произошла ошибка!")
        }
    }
    return (
        <section className="formSection">
            <div className="container">

                <h2 className="formSection__h2">У Вас есть Вопрос?</h2>
                <h3 className="formSection__h3">Заполните поля ниже и мы Вам обязательно перезвоним</h3>
                <form className="form" onSubmit={handleSubmit(feedback)}>
                    <label className='form__label'>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.8328 20.9109C20.4424 20.7946 20.8006 20.1521 20.469 19.6276C19.8051 18.5775 18.7837 17.6546 17.4872 16.9465C15.7696 16.0085 13.665 15.5 11.5 15.5C9.33496 15.5 7.23041 16.0085 5.51276 16.9465C4.21628 17.6546 3.19492 18.5775 2.53102 19.6276C2.1994 20.1521 2.55762 20.7946 3.16719 20.9109L4.00669 21.071C8.95761 22.0151 14.0424 22.0151 18.9933 21.071L19.8328 20.9109Z" fill="#454545"/>
                            <circle cx="11.5" cy="8" r="5.5" fill="#454545"/>
                        </svg>
                        <input {...register('name', {
                            required: {
                                message: 'имя обязательно к заполнению',
                                value: true
                            }
                        })} className={`form__input ${errors.name ? 'form__input_error' : ''}`} placeholder='Ваше имя*' type="text"/>

                    </label>
                    <p className='form__error'>
                        {errors.name && errors.name?.message}
                    </p>
                    <label className='form__label'>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.67962 3.26482L5.73734 3.20711C6.12786 2.81658 6.76103 2.81658 7.15155 3.20711L10.1818 6.23734C10.5723 6.62786 10.5723 7.26103 10.1818 7.65155L8.96861 8.86473C8.78829 9.04504 8.74359 9.32051 8.85763 9.54859C10.1761 12.1856 12.3144 14.3239 14.9514 15.6424C15.1795 15.7564 15.455 15.7117 15.6353 15.5314L16.8484 14.3182C17.239 13.9277 17.8721 13.9277 18.2627 14.3182L21.2929 17.3484C21.6834 17.739 21.6834 18.3721 21.2929 18.7627L21.2352 18.8204C19.1238 20.9317 15.7813 21.1693 13.3925 19.3777L11.2952 17.8048C9.55171 16.4971 8.00289 14.9483 6.69524 13.2048L5.12226 11.1075C3.33072 8.71874 3.56827 5.37617 5.67962 3.26482Z" fill="#454545"/>
                        </svg>
                        <input {...register('number', {
                            required: {
                                message: 'номер обязателен к заполнению',
                                value: true
                            }
                        })} className={`form__input ${errors.number ? 'form__input_error' : ''}`} placeholder='Номер телефона*' type="text"/>

                    </label>
                    <p className='form__error'>
                        {errors.number && errors.number?.message}
                    </p>
                    <Btn text={"Отправить номер"} type={"submit"}/>

                </form>
            </div>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="light"
            />
        </section>
    );
};

export default FormSection;