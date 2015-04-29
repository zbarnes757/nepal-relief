module ActivitiesHelper

  def time_calc(created_at)

      time_now = Time.now.to_i
      time_reference = DateTime.parse(created_at).strftime('%s').to_i
      elapsed_time = time_now - time_reference

      case elapsed_time
        when 0 then 'just now'
        when 1 then 'a second ago'
        when 2..59 then '%d seconds ago' % elapsed_time.to_s
        when 60..119 then 'a minute ago' #120 = 2 minutes
        when 120..3540 then '%d minutes ago' % (elapsed_time/60).to_i.to_s
        when 3541..7100 then 'an hour ago' # 3600 = 1 hour
        when 7101..82800 then  '%d hours ago' % ((elapsed_time+99)/3600).to_i.to_s
        when 82801..172000 then 'a day ago' # 86400 = 1 day
        when 172001..518400 then  '%d days ago' % ((elapsed_time+800)/(60*60*24)).to_i.to_s
        when 518400..1036800 then 'a week ago'
        else '%d weeks ago' % ((elapsed_time+180000)/(60*60*24*7)).to_i.to_s

      end
    end
end
