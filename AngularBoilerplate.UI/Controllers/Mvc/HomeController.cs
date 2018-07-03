using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularBoilerplate.UI.Controllers.Mvc
{
    public class HomeController : Controller
    {
        [Route("~/")]
        public ActionResult Index()
        {
            return Redirect("~/App/Boilerplate");
        }
    }
}