import { rest } from "msw";

const nasaApiUrl = "https://api.nasa.gov/planetary/apod";

export const handlers = [
  rest.get(`${nasaApiUrl}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        copyright: "Jason Dain",
        date: "2022-04-02",
        explanation:
          "This almost otherworldly display of northern lights was captured in clear skies during the early hours of March 31 from 44 degrees north latitude, planet Earth. In a five second exposure the scene looks north from Martinique Beach Provincial Park in Nova Scotia, Canada. Stars of the W-shaped constellation Cassiopeia shine well above the horizon, through the red tint of the higher altitude auroral glow. Auroral activity was anticipated by skywatchers alerted to the possibility of stormy space weather by Sun-staring spacecraft. The predicted geomagnetic storm was sparked as a coronal mass ejection, launched from prolific solar active region 2975, impacted our fair planet's magnetosphere.",
        hdurl: "https://apod.nasa.gov/apod/image/2204/Z62_5747-Edit.jpg",
        media_type: "image",
        service_version: "v1",
        title: "Nova Scotia Northern Lights",
        url: "https://apod.nasa.gov/apod/image/2204/Z62_5747-Edit1090.jpg",
      })
    );
  }),
];
