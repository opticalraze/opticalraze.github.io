
                    var local = {
                        "Home": {
                          //en: "Home",
                          fr: "Accueil"
                        },
                        "Apps": {
                          //en: "Apps",
                          fr: "Applis"
                        },
                        "Advertising": {
                          //en: "Advertising",
                          fr: "Publicitaire"
                        },
                        "About": {
                          //en: "Advertising",
                          fr: "Présentation"
                        },
                        "about": {
                          //en: "Advertising",
                          fr: "présentation"
                        },
                        "contact": {
                          fr: "contactez-nous"
                        },
                        "resources": {
                          fr: "ressources"
                        },
                        "News": {
                          //en: "Advertising",
                          fr: "Actualités"
                        },
                        "Websites": {
                          //en: "Advertising",
                          fr: "Sites Web"
                        },
                        "Team": {
                          fr: "Équipe"
                        },
                        "Contact": {
                          fr: "Contactez-nous"
                        },
                        "Mailing Address": {
                          fr:"Adresse Postale"
                        },
                        "Email": {
                          fr:"Courriel"
                        },
                        "Social": {
                          fr:"Médias Sociaux"
                        },
                        "click to view page": {
                          fr:"cliquez pour plus"
                        },
                        "Page Not Found": {
                          //fr:"Page Introuvable"
                          fr:"Page Non Trouvée"
                        },
                        "click here to go home": {
                          fr:"cliquez ici pour la page d'accueil"
                        },
                        slogan: {
                          //en: "Advertising",
                          en: "we find problems and eliminate&nbsp;them",
                          fr: "on trouve des problèmes et on&nbsp;les&nbsp;efface"
                        },
                        aboutus: {
                          en: "We build websites and stuff.",
                          fr: "Nous construisons des sites web et des trucs.",
                        },
                        p1h1: {
                          en: "Happy New Year!",
                          fr: "Bonne Année!"
                        },
                        p1p1: {
                          en: "This time of year offers us a brand new start. We would like to take this opportunity to start fresh with you.",
                          fr: "Cette période de l'année nous offre un tout nouveau départ. Nous aimerions profiter de cette occasion pour repartir à neuf avec vous."
                        },
                        p1p2: {
                          en: "Wishing you all love and peace in the new year.",
                          fr: "On vous souhaite à tous l'amour et paix pour la nouvelle année."
                        }

                    };

                    var translator = $('body').translate({
                        lang: "en",
                        t: local
                    });

                    var language=Cookies.get("language"); // check cookie
                    if(!language)language=window.navigator.userLanguage||window.navigator.language;language=language.substring(0,2); // get browser preference
                    if(language=='fr') {
                      translator.lang('fr');  // translate page to french
                      $(".language-select a").toggleClass("active");
                    } else {
                      language='en'; // set default to english
                    }

                    $(document).ready(function() {



                      $('.language-select a').click(function() {
                        event.preventDefault();
                        language=$(this).data('id');

                        $(this).addClass('active').siblings().removeClass('active');
                        translator.lang(language);

                        // cookie here
                        Cookies.set('language',language,{expires:365});
                      });



                    });
