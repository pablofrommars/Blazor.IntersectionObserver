namespace Blazor.IntersectionObserver;

public class IntersectionChangedEventArgs : EventArgs
{
	public double Ratio { get; set; }
}

[EventHandler("onintersectionchanged", typeof(IntersectionChangedEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
public static class EventHandlers
{
}