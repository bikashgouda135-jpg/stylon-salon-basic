import editorialImage from "@/src/assests/editorial.png";
import makeoverImage from "@/src/assests/makeover.png";
import stylonImage from "@/src/assests/stylon.png";
import salonHomeImage from "@/src/assests/sylon home.png";

export const images = {
  logo: "/images/logo.jpeg",
  // Keep photo assets in the source bundle so Next can optimize them reliably.
  // `assests` is the existing folder spelling in this project.
  salon: stylonImage,
  makeover: makeoverImage,
  styling: salonHomeImage,
  editorial: editorialImage,
  home: salonHomeImage,
  makeoverNew: makeoverImage,
  salonInterior: stylonImage,
  salonHome: salonHomeImage,
} as const;

export const salonData = {
  name: "Stylon Makeover", logo: images.logo, whatsapp: "", // Add number in international format to enable WhatsApp.
  contact: { address: "Address available on request", phone: "Phone available on request", email: "Email available on request", hours: "Opening hours available on request", instagram: "", facebook: "", maps: "" },
  services: [
    { title: "Hair", items: "Hair styling · Haircut · Hair colour", image: images.makeoverNew },
    { title: "Makeup", items: "Bridal makeup · Party makeup", image: images.styling },
    { title: "Beauty", items: "Facials · Manicure · Pedicure", image: images.editorial },
    { title: "Makeover", items: "Complete occasion-ready looks", image: images.salonInterior },
  ],
  gallery: [
    ["HAIR", images.makeoverNew], ["MAKEUP", images.styling], ["BRIDAL", images.editorial], ["SALON", images.salonInterior], ["BEAUTY", images.salonHome], ["MAKEUP", images.makeoverNew]
  ],
  testimonials: ["[Demo review — replace with a verified client review.] The experience felt considered from consultation to the finishing touch.", "[Demo review — replace with a verified client review.] Thoughtful styling, beautiful detail and a calm, welcoming atmosphere."]
} as const;
