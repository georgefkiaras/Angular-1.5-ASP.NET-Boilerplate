using AngularBoilerplate.Data.Models.Dto;
using AngularBoilerplate.Data.Models.Repositories;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace AngularBoilerplate.UI.Controllers.Api
{
    public class StopsController : ApiController
    {
        private StopsRepo _s;
        protected StopsRepo _stopsRepo
        {
            get
            {
                if (_s != null)
                {
                    return _s;
                }
                var appDataPath = Path.Combine(HttpContext.Current.Request.PhysicalApplicationPath, "App_Data");
                var stopsCSV_Path = Path.Combine(appDataPath, "Stops.csv");
                _s = new StopsRepo(stopsCSV_Path);
                return _s;
            }
        }

        /// <summary>
        /// Get a list of all stops
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Stops")]
        public List<StopDto> Stops()
        {
            return _stopsRepo.GetAllStops();
        }

        /// <summary>
        /// Get a single stop by ID
        /// </summary>
        /// <param name="stopId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Stop/{stopId}")]
        public StopDto Stop(string stopId)
        {
            return _stopsRepo.GetStop(stopId);
        }
    }
}
