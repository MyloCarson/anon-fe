import React, {useState } from 'react';
import PropTypes from 'prop-types';
import { getKey } from 'utils';
import { DownChevron } from 'vectors/index';


const SectorDetail = ({name, description, sub_sectors}) => {

    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(!show);
    }

    return (
        <li className="list-inside">
            <div className="flex flex-row justify-between items-center border-white border-solid border-b-2 pb-3 cursor-pointer" onClick={toggleShow}>
                <span className="text-xl">{name}</span>
                <div className="ml-5">
                    <DownChevron />
                </div>
            </div>
            {
                show && (
                    <>
                        <p className="mt-2">{description}</p>
                        {sub_sectors.length > 0 && (<p className="mt-3">Sub-sectors are:</p>)}
                        <ul className="">
                            {sub_sectors.map( sub_sector => (
                                <li className="list-inside list-disc text-sm" key={getKey()}>{sub_sector}</li>
                            ))}
                        </ul>
                    </>
                )
            }
        </li>
    )
}

SectorDetail.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sub_sectors: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default SectorDetail;