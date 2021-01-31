$(document).ready(function () {
    const jobPostings = $('.job-postings');
    jobPostings.owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    $('.jobPostingsNext').click(function () {
        jobPostings.trigger('next.owl.carousel');
    })
    $('.jobPostingsPrev').click(function () {
        jobPostings.trigger('prev.owl.carousel', [300]);
    })


    const careerTools = $('.career-tools');
    careerTools.owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    $('.careerToolsNext').click(function () {
        careerTools.trigger('next.owl.carousel');
    })
    $('.careerToolsPrev').click(function () {
        careerTools.trigger('prev.owl.carousel', [300]);
    })

});
