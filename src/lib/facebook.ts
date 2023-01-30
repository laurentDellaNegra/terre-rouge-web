import { EventRequest, FacebookAdsApi, ServerEvent, UserData } from 'facebook-nodejs-business-sdk'

export default async function facebookEventFetch(
  request: any,
  eventID: any,
  eventName: any,
  urlLocation: any,
  fbp: any,
  fbc: any
) {
  const accessToken = process.env.NEXT_PUBLIC_FACEBOOK_ANALYTICS_API_TOKEN
  const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_ANALYTICS_API_PIXEL_ID

  if (!accessToken || !pixelId) {
    console.log('Please define env variable:')
    console.log('NEXT_PUBLIC_FACEBOOK_ANALYTICS_API_TOKEN')
    console.log('NEXT_PUBLIC_FACEBOOK_ANALYTICS_API_PIXEL_ID')
    return
  }

  FacebookAdsApi.init(accessToken)

  const currentTimestamp = Math.floor(Date.now() / 1000)

  const userData = new UserData()
    .setClientIpAddress(request.connection.remoteAddress)
    .setClientUserAgent(request.headers['user-agent'])
    .setFbp(fbp)
    .setFbc(fbc)

  const serverEvent = new ServerEvent()
    .setEventId(eventID) // event name + timestamp
    .setEventName(eventName)
    .setEventTime(currentTimestamp)
    .setUserData(userData)
    .setEventSourceUrl(urlLocation)
    .setActionSource('website')
  const eventsData = [serverEvent]
  const eventRequest = new EventRequest(accessToken, pixelId).setEvents(eventsData)
  // .setTestEventCode('TEST30918');
  eventRequest.execute()
  //   .then(
  //     (response) => {
  //       console.log('Response: ', response);
  //     },
  //     (err) => {
  //       console.error('Error: ', err);
  //     }
  //   );
}
