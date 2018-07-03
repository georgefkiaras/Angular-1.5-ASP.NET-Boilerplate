using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularBoilerplate.UI.Startup))]
namespace AngularBoilerplate.UI
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}