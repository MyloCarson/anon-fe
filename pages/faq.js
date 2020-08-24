import React from 'react';
import DefaultLayout from 'components/layout/DefaultLayout'
import { NSE_SECTORS } from '@constants';
import {SectorDetail} from 'blocks/index';
import { getKey } from 'utils';

export default function FAQ() {
    return (
        <DefaultLayout>
            <main className="w-screen pt-5 pb-16 px-4 xl:px-0">
                <div className="sm:max-w-full mx-auto md:max-w-screen-lg">
                    <h3 className="text-white text-xl">Frequently Asked Questions</h3>

                    <div className="text-white mt-12">
                        <h5 className="text-white text-xl">1. What is SafeSpace?</h5>
                        <div className="pl-5">
                            <p className="my-3">SafeSpace is an anonymous community web application for the workplace. SafeSpace vision is to break down professional barriers and hierarchy.</p>
                        </div>
                    </div>
                    
                    <div className="text-white mt-12">
                        <h5 className="text-white text-xl">2. What Sector does your company belong to ?</h5>
                        <div className="pl-5">
                            <p className="my-3">According to the <a className="text-indigo-400 underline" href="http://www.nse.com.ng/issuers/listing-your-company/industry-sector" target="_blank">Nigerian Stock Exchange</a>, as at 2rd August, 2020, the following are the available sectors. </p>
                            <ul className="space-y-3">
                                {NSE_SECTORS.map( sector => (
                                    <SectorDetail key={getKey()} { ...sector}/>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                
            </main>
        </DefaultLayout>
    )
}