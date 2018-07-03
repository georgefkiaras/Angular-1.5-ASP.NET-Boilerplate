using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;

namespace AngularBoilerplate.UI.Models
{
    public class ClockResult
    {
        public DateTime CurrentDateTime
        {
            get
            {
                //Add any timezone adjustments here
                return DateTime.Now;
            }
        }

        public string ServerTime
        {
            get
            {
                var time = CurrentDateTime.TimeOfDay;


                return string.Format("{0}:{1}:{2}",
                    time.Hours.ToString("D2"),
                    time.Minutes.ToString("D2"),
                    time.Seconds.ToString("D2"));
            }
        }

        public string DayOfTheWeek
        {
            get
            {
                return CurrentDateTime.DayOfWeek.ToString();
            }
        }
        public string Month
        {
            get
            {
                return CurrentDateTime.ToString("MMM", CultureInfo.InvariantCulture);
            }
        }
        public string Date
        {
            get
            {
                return CurrentDateTime.Day.ToString();
            }
        }
        public string Year
        {
            get
            {
                return CurrentDateTime.Year.ToString();
            }
        }
        public bool Tic { get; set; }
        public bool Toc
        {
            get
            {
                return !Tic;
            }
        }

        public ClockResult(bool tic)
        {
            this.Tic = tic;
        }
    }
}