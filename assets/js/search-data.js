// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-all-by-year",
              title: "all (by year)",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-catalysis",
              title: "catalysis",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-catalysis-ml",
              title: "catalysis/ml",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-ml-gnns",
              title: "ML/GNNs",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-nanotechnology",
              title: "nanotechnology",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Graduate and undergraduate courses in Chemical Engineering at CMU",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "news-the-oc20-dataset-and-open-ml-models-were-released-to-the-public",
          title: 'The OC20 dataset and open ML models were released to the public!',
          description: "",
          section: "News",},{id: "news-the-oc22-dataset-and-models-for-oxide-electrocatalysts-were-released",
          title: 'The OC22 dataset and models for oxide electrocatalysts were released.',
          description: "",
          section: "News",},{id: "news-i-was-promoted-to-associate-professor-of-chemical-engineering-at-cmu",
          title: 'I was promoted to Associate Professor of Chemical Engineering at CMU!',
          description: "",
          section: "News",},{id: "news-adsorbml-a-strategy-to-use-pre-trained-gnns-to-massively-accelerate-the-adsorbate-placement-and-adsorption-energy-calculation-process-was-released-on-arxiv",
          title: 'AdsorbML, a strategy to use pre-trained GNNs to massively accelerate the adsorbate placement...',
          description: "",
          section: "News",},{id: "news-the-ocp-demo-website-was-launched-check-it-out-at-https-open-catalyst-metademolab-com",
          title: 'The OCP Demo website was launched! Check it out at https://open-catalyst.metademolab.com/',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%75%6C%69%73%73%69@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zulissi", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zulissi", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=E0tlVgQAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
