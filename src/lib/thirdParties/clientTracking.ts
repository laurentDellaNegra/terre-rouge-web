import getCookie from '@/lib/cookie'

export function track(eventName: string) {
  const eventID = `${eventName}.${new Date().getTime()}`
  if (typeof (window as any).fbq !== 'undefined')
    (window as any).fbq('track', eventName, { event_id: eventID })
  fetch('/api/track', {
    method: 'post',
    body: JSON.stringify({
      eventID,
      eventName,
      urlLocation: window?.location?.href,
      fbp: getCookie('_fbp'),
      fbc: getCookie('_fbc'),
    }),
  })
}
