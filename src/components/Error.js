import {useRouteError} from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    return(
        <div className="bg-orange-100 dark:bg-slate-900 text-black dark:text-white text-center">
            <h1 className='font-bold text-3xl'>Oops....</h1>
            <h2 className='font-bold text-2xl'> Something went wrong !!!</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}

export default Error;