<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use App\Models\Category;
use App\Models\Donation;
use App\Models\Event;
use App\Models\Gallery;
use App\Models\Member;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Inertia\Inertia;

class PublicController extends Controller
{
    public function home()
    {
        // Announcement for topbar breaking news
        $announcement = Announcement::active()
            ->where(function ($query) {
                $query->whereNull('starts_at')
                    ->orWhere('starts_at', '<=', now());
            })
            ->where(function ($query) {
                $query->whereNull('ends_at')
                    ->orWhere('ends_at', '>=', now());
            })
            ->first();

        // Featured post (latest)
        $featuredPost = Post::published()->latest()->first();

        // Mini posts (next 4 latest, excluding featured)
        $miniPosts = collect();
        if ($featuredPost) {
            $miniPosts = Post::published()
                ->where('id', '!=', $featuredPost->id)
                ->limit(4)
                ->get();
        }

        // Latest posts for grid (excluding featured and mini, paginated)
        $latestPosts = Post::published();
        if ($featuredPost) {
            $latestPosts = $latestPosts->where('id', '!=', $featuredPost->id);
        }
        if ($miniPosts->isNotEmpty()) {
            $latestPosts = $latestPosts->whereNotIn('id', $miniPosts->pluck('id'));
        }
        $latestPosts = $latestPosts->latest()->paginate(6);

        // Events grouped by status for featured section
        $upcomingEvents = Event::upcoming()
            ->orderBy('start_date')
            ->limit(3)
            ->get();
         
        $ongoingEvents = Event::ongoing()
            ->orderBy('start_date')
            ->limit(3)
            ->get();
        
        // For featured activities section, combine upcoming and ongoing
        $featuredEvents = $upcomingEvents->concat($ongoingEvents)->take(4);

        // Finished events
        $finishedEvents = Event::finished()
            ->orderByDesc('end_date')
            ->limit(3)
            ->get();

        // Donasi (latest donation)
        $latestDonation = Donation::approved()->latest()->first();

        // Galeri preview (latest 6 images)
        $galeriPreview = Gallery::latest()->limit(6)->get();

        return Inertia::render('Public/Home', [
            'announcement' => $announcement,
            'featuredPost' => $featuredPost,
            'miniPosts' => $miniPosts,
            'latestPosts' => $latestPosts,
            'featuredEvents' => $featuredEvents,
            'upcomingEvents' => $upcomingEvents,
            'ongoingEvents' => $ongoingEvents,
            'finishedEvents' => $finishedEvents,
            'latestDonation' => $latestDonation,
            'galeriPreview' => $galeriPreview,
        ]);
    }

    // ... other methods (profil, struktur, donasi, berita, kegiatans, galeri, kontak) remain the same
}