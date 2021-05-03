$(document).ready(function () {
    const meetTeam = $('.meet-team');
    meetTeam.owlCarousel({responsiveClass: true, responsive: {0: {items: 1,}, 600: {items: 2,}, 1000: {items: 3,}}});
    $('.meetTeamNext').click(function () {meetTeam.trigger('next.owl.carousel');});
    $('.meetTeamPrev').click(function () {meetTeam.trigger('prev.owl.carousel', [300]);});
    const jobPostings = $('.job-postings');
    jobPostings.owlCarousel({responsiveClass: true, responsive: {0: {items: 1,}, 600: {items: 2,}, 1000: {items: 3,}}});
    $('.jobPostingsNext').click(function () {jobPostings.trigger('next.owl.carousel');});
    $('.jobPostingsPrev').click(function () {jobPostings.trigger('prev.owl.carousel', [300]);});
    const careerTools = $('.career-tools');
    careerTools.owlCarousel({responsiveClass: true, responsive: {0: {items: 1,}, 600: {items: 2,}, 1000: {items: 3,}}});
    $('.careerToolsNext').click(function () {careerTools.trigger('next.owl.carousel');});
    $('.careerToolsPrev').click(function () {careerTools.trigger('prev.owl.carousel', [300]);});
    const recruitmentPrograms = $('.recruitment-programs');
    recruitmentPrograms.owlCarousel({responsiveClass: true, responsive: {0: {items: 1,}, 600: {items: 2,}, 1000: {items: 3,}}});
    $('.recruitmentProgramsNext').click(function () {recruitmentPrograms.trigger('next.owl.carousel');});
    $('.recruitmentProgramsPrev').click(function () {recruitmentPrograms.trigger('prev.owl.carousel', [300]);});
    const discoverCompanies = $('.discover-companies');
    discoverCompanies.owlCarousel({responsiveClass: true, responsive: {0: {items: 1,}, 600: {items: 2,}, 1000: {items: 3,}}});
    $('.discoverCompaniesNext').click(function () {discoverCompanies.trigger('next.owl.carousel');});
    $('.discoverCompaniesPrev').click(function () {discoverCompanies.trigger('prev.owl.carousel', [300]);});
    const upcomingEvents = $('.upcoming-events');
    upcomingEvents.owlCarousel({responsiveClass: true, responsive: {0: {items: 1,}, 600: {items: 2,}, 1000: {items: 3,}}});
    $('.upcomingEventsNext').click(function () {upcomingEvents.trigger('next.owl.carousel');});
    $('.upcomingEventsPrev').click(function () {upcomingEvents.trigger('prev.owl.carousel', [300]);});
    const onlineTrainings = $('.online-trainings');
    onlineTrainings.owlCarousel({responsiveClass: true, responsive: {0: {items: 1,}, 600: {items: 3,}, 1000: {items: 4,}}});
    $('.onlineTrainingsNext').click(function () {onlineTrainings.trigger('next.owl.carousel');});
    $('.onlineTrainingsPrev').click(function () {onlineTrainings.trigger('prev.owl.carousel', [300]);});
    const videoList = $('.video-list');
    videoList.owlCarousel({responsiveClass: true, responsive: {0: {items: 1,}, 600: {items: 3,}, 1000: {items: 4,}}});
    $('.videoListNext').click(function () {videoList.trigger('next.owl.carousel');});
    $('.videoListPrev').click(function () {videoList.trigger('prev.owl.carousel', [300]);});
    const cvTemplate = $('.cv-template');
    cvTemplate.owlCarousel({responsiveClass: true, responsive: {0: {items: 2,}, 600: {items: 3,}, 900: {items: 4,}, 1100: {items: 5,}, 1200: {items: 7,}}});
    $('.cvTemplateNext').click(function () {cvTemplate.trigger('next.owl.carousel');});
    $('.cvTemplatePrev').click(function () {cvTemplate.trigger('prev.owl.carousel', [300]);});
    const eventMonth = $('.event-month');
    eventMonth.owlCarousel({responsiveClass: true, responsive: {0: {items: 1,},  600: {items: 2,}, 900: {items: 3,}}});
    $('.eventMonthNext').click(function () {eventMonth.trigger('next.owl.carousel');});
    $('.eventMonthPrev').click(function () {eventMonth.trigger('prev.owl.carousel', [300]);});

});
