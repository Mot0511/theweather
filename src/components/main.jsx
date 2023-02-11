import React from 'react';
import cl from "../App.module.css";

const Main = ({temp, daynighttemp, otherdata}) => {

    return (
        <div className={cl.main}>
            <div className={cl.now}>
                <div className={cl.tempnow}>
                    <p className={cl.mainTemperature}>{temp}</p>
                    <p className={cl.daynighttemp}>{daynighttemp}</p>

                </div>
                <div className={cl.datanow}>
                    {
                        otherdata.map(data => {
                            return <p className={cl.other}>{data}</p>
                        })
                    }
                </div>

            </div>
            {/*<div className={cl.hourly}>*/}
            {/*    <hr/>*/}
            {/*    <center>*/}
            {/*    <div className={cl.hourlytemps}>*/}
            {/*        {*/}
            {/*            hours.map(hour => {*/}
            {/*                return <p className={cl.temps}>{hour}</p>*/}
            {/*            })*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*    <div className={cl.hourlytemps}>*/}
            {/*        {*/}
            {/*            temps.map(temp => {*/}
            {/*                return <p className={cl.temps}>{temp}</p>*/}
            {/*            })*/}
            {/*        }*/}
            {/*</div>*/}
            {/*    </center>*/}
            {/*</div>*/}
        </div>
    );
};

export default Main;