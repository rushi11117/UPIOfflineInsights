import React from 'react'
import '../error-handle/error.css';
import SecondaryButton from '../components/micro-component/secondaryButton'
import { Link } from 'react-router-dom'


export default function error() {
    return (
        <main className=' ms-sm-auto col-lg-10 px-md-4 center'>
            <section> <span>404</span>
                <div>
                    <p>The requested path could not be found</p>
                </div>
                <div>
                    <Link>
                        <SecondaryButton buttonText={"Go Home"} />
                    </Link>
                </div>
            </section>
        </main>
    )
}


