import {FC} from "react";

const ContactPage: FC = () => {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className='lg:max-w-2xl flex flex-col gap-8'>
                <div>
                    <h1 className='text-2xl font-bold mb-4'>Контакты</h1>
                    <div className='grid grid-cols-2 grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_3fr] h-fit text-md'>
                        <div className='font-semibold'>Номер телефона</div>
                        <div>89999994576</div>
                        <div className='font-semibold'>Viber</div>
                        <div>89999994576</div>
                        <div className='font-semibold'>Whatsup</div>
                        <div>89999994576</div>
                        <div className='font-semibold'>Telegram</div>
                        <div>89999994576</div>
                        <div className='font-semibold'>Avito</div>
                        <div>Мы на авито</div>
                        <div className='font-semibold'>Адрес</div>
                        <div>г. Ярославль, ул. Гагарина, д. 54А</div>
                        <div className='font-semibold'>Как добраться?</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda aut
                            blanditiis cupiditate distinctio dolorum et harum id illo in ipsa natus nesciunt,
                            officiis porro praesentium provident, rem tenetur veniam!
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-bold mb-4'>Доставка</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut eos iusto natus sint.
                        Adipisci aliquam consequatur deserunt est, excepturi inventore, iste itaque minus, optio quo
                        repudiandae ullam! Aliquid, nisi.</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold mb-4'>Мы на карте</h1>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;