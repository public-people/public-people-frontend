module.exports = {
  custom: {
    local: 'http://localhost:8000',
    remote: 'https://public-people.netlify.com',
  },
  backstop: {
    id: 'public-people',
    viewports: [
      {
        label: 'phone',
        width: 320,
        height: 480,
      },
      {
        name: 'tablet-vertical',
        width: 568,
        height: 1024,
      },
      {
        name: 'tablet-horisontal',
        width: 1024,
        height: 768,
      },
      {
        label: 'desktop',
        width: 1920,
        height: 1080,
      },
    ],
    paths: {
      bitmaps_reference: 'tooling/backstop/temp_data/bitmaps_reference',
      bitmaps_test: 'tooling/backstop/temp_data/bitmaps_test',
      engine_scripts: 'tooling/backstop/scripts',
      html_report: 'tooling/backstop/temp_data/html_report',
      ci_report: 'tooling/backstop/temp_data/ci_report',
    },
    report: ['ci'],
    engine: 'chrome',
    engineFlags: [],
    asyncCaptureLimit: 5,
    asyncCompareLimit: 50,
    debug: false,
    debugWindow: false,
  },
};
