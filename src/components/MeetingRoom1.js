const MeetingRoom1 = () => {
  return (
    <section>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-12'>
            <h3 className='text-center'>Meeting Room 1</h3>
          </div>
          <iframe
            src='https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FDubai&bgcolor=%23ffffff&showTz=0&showCalendars=0&showTabs=0&showPrint=0&showDate=0&showNav=0&showTitle=0&mode=AGENDA&src=Z2ZvcnR5dHdvOTVAZ21haWwuY29t&color=%23039BE5'
            width='800'
            height='600'
            frameborder='0'
            scrolling='no'
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MeetingRoom1;
