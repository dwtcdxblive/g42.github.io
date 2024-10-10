import React from 'react';

const MeetingRoom2 = () => {
    return (
      <section>
        <div className='container mt-5'>
          <div className='col-md-12'>
            <h3 className='text-center'>Meeting Room 2</h3>
          </div>
          <div className='row'>
            <iframe
              src='https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FDubai&bgcolor=%23ffffff&mode=AGENDA&showTitle=0&showNav=0&showPrint=0&showCalendars=0&showTabs=0&showTz=0&showDate=0&src=YW91ZmRldkBnbWFpbC5jb20&color=%23039BE5'
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

export default MeetingRoom2;