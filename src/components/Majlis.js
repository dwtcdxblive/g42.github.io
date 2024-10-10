import React from 'react';

const Majlis = () => {
    return (
      <section>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-12'>
              <h3 className='text-center'>Majlis</h3>
            </div>
            <iframe
              src='https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FDubai&bgcolor=%23ffffff&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showTz=0&showCalendars=0&mode=AGENDA&src=dGFxYWhxMUBnbWFpbC5jb20&color=%23039BE5'
              width='800'
              height='600'
              frameborder='0'
              scrolling='no'
            ></iframe>
          </div>
        </div>
      </section>
    );
}

export default Majlis;