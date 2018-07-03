using System.Collections.Generic;
using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;

namespace AngularBoilerplate.UI.Controllers.SignalR
{
    public class SignalHub : Hub
    {
        public static HashSet<string> ConnectedIds = new HashSet<string>();
        public override Task OnConnected()
        {
            ConnectedIds.Add(Context.ConnectionId);
            return base.OnConnected();
        }

        public override Task OnReconnected()
        {

            return base.OnReconnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            ConnectedIds.Remove(Context.ConnectionId);
            return base.OnDisconnected(stopCalled);
        }


        //http://stackoverflow.com/questions/17309745/how-to-join-a-group-using-signalr
        public Task JoinGroup(string groupName)
        {
            return Groups.Add(Context.ConnectionId, groupName);
        }

        public Task LeaveGroup(string groupName)
        {
            return Groups.Remove(Context.ConnectionId, groupName);
        }
    }
}