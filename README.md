Blazor.IntersectionObserver
===========================

[![NuGet](https://img.shields.io/nuget/vpre/Blazor.IntersectionObserver.svg)](https://www.nuget.org/packages/Blazor.IntersectionObserver)
[![NuGet](https://img.shields.io/nuget/dt/Blazor.IntersectionObserver.svg)](https://www.nuget.org/packages/Blazor.IntersectionObserver) 

Simple Blazor class library exposing the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

# Installation

Install [Blazor.IntersectionObserver with NuGet](https://www.nuget.org/packages/Blazor.IntersectionObserver):

    Install-Package Blazor.IntersectionObserver
    
Or via the .NET Core command line interface:

    dotnet add package Blazor.IntersectionObserver

# Configuration

Register the library in wwwroot/index.html (Blazor WebAssembly) or Pages/_Layout.cshtml (Blazor Server) immediately after the Blazor `<script>`. Do not skip this, it is required to handle the custom event `intersectionchange`):

```html
<script src="./_content/Blazor.IntersectionObserver/blazor.intersectionObserver.js" />
```

# Usage

`OnIntersectionChangedCallback` can be set on `IntersectionObserver` or `TargetElement` individual components.

```html
@using Blazor.IntersectionObserver;

<IntersectionObserver
	Threshold=@(new[] { 0.0, 0.2, 0.4, 0.6, 0.8, 1.0 })
	RootMargin="0px" //Optional
	OnIntersectionChangedCallback=@OnIntersectionChanged>

	<TargetElement Name="target1">
		<div class="h-[2000px] bg-red-100">
			<h1>Target 1</h1>
		</div>
	</TargetElement>

	<TargetElement Name="target2">
		<div class="h-[1000px] bg-green-100">
			<h1>Target 2</h1>
		</div>
	</TargetElement>

	<TargetElement Name="target3">
		<div class="h-[3000px] bg-blue-100">
			<h1>Target 3</h1>
		</div>
	</TargetElement>
</IntersectionObserver>
```

```csharp

@code {
	void OnIntersectionChanged((string? targetName, double ratio) args)
	{
		// Your code executes when your target elements cross the thresholds on scroll
	}
}
```