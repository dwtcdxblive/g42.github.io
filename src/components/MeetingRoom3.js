import React from 'react';

const MeetingRoom3 = () => {
    return (
      <section>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-12'>
              <h3 className='text-center'>Meeting Room 3</h3>
            </div>
            <iframe
              className='col-md-12 mt-3'
              src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FDubai&showTz=0&showCalendars=0&showTabs=0&showPrint=0&showDate=0&showNav=0&showTitle=0&mode=AGENDA&src=cHJlc2lnaHQ2ODRAZ21haWwuY29t&color=%23039BE5'
              width='800'
              height='600'
              title='room3'
            ></iframe>
          </div>
        </div>
      </section>
    );
}

export default MeetingRoom3;