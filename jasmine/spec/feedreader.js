/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URLs are defined and not empty', function () {
            allFeeds.forEach(feed => {
                const url = feed.url;
                expect(url).toBeDefined();
                expect(url.length).toBeGreaterThan(0);
            })
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('name is defined and not empty', function () {
            allFeeds.forEach(feed => {
                const name = feed.name;
                expect(name).toBeDefined();
                expect(name.length).toBeGreaterThan(0);

            })
        })
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function () {


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        })
        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('menu shows when clicked and hidden when clicked again', function () {
            //icon to click
            const icon = $('.menu-icon-link')

            // First click on hamburger icon
            icon.trigger('click')
            // Menu should be visible
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // Second click on hamburger icon
            icon.trigger('click')
            // Menu should be hidden
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        //done is executed after the page has loaded;
        beforeEach((done) => {
            loadFeed(0, done);
        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('should have at least .entry elements within the .feed container', (done) => {
            const container = document.querySelector('.feed');
            const elements = container.children;
            expect(elements.length).not.toBe(0);

            /* ensures that there is an element with .entry class */
            for (const element of elements) {
                expect(element.querySelector('.entry')).toBeDefined();
            }
            done();

        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {

    });
    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
    // Variables to keep track of the old and new feeds
    let oldFeed;
    let newFeed;

    beforeEach(function (done) {
        // Load the original feed
        loadFeed(0, function () {
            oldFeed = $('.feed').html();
            done();
        });
    });

    /* Test that a new feed is loaded 
     * test to show that they are different
     */
    it('content changes when new feed loaded', function (done) {
        // Load second feed
        loadFeed(1, function () {
            newFeed = $('.feed').html();
            // Check if oldFeed is defined
            expect(oldFeed).toBeDefined();
            // Check if newFeed is defined
            expect(newFeed).toBeDefined();
            // Expect old and new feed not to be equal
            expect(newFeed).not.toEqual(oldFeed);
            done();
        });
    });


}());
