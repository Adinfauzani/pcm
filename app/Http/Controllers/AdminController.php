<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Donation;
use App\Models\Event;
use App\Models\Gallery;
use App\Models\Member;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        $stats = [
            'posts' => Post::count(),
            'events' => Event::count(),
            'members' => Member::count(),
            'donations' => Donation::count(),
            'pending_donations' => Donation::pending()->count(),
        ];

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
        ]);
    }

    public function posts(Request $request)
    {
        $posts = Post::with('author', 'category')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return Inertia::render('Admin/Posts', [
            'posts' => $posts,
        ]);
    }

    public function createPost()
    {
        $categories = Category::where('type', 'post')->get();

        return Inertia::render('Admin/PostForm', [
            'categories' => $categories,
            'post' => null,
        ]);
    }

    public function storePost(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            'excerpt' => 'nullable|string|max:500',
            'thumbnail' => 'nullable|file|image|max:2048',
            'category_id' => 'nullable|exists:categories,id',
            'status' => 'required|in:draft,published',
            'is_featured' => 'boolean',
        ]);

        if ($request->hasFile('thumbnail')) {
            $validated['thumbnail'] = $request->file('thumbnail')->store('posts', 'public');
        }

        $validated['slug'] = Str::slug($validated['title']);
        $validated['author_id'] = auth()->id();
        
        if ($validated['status'] === 'published') {
            $validated['published_at'] = now();
        }

        Post::create($validated);

        return redirect()->route('admin.posts')->with('success', 'Post created successfully.');
    }

    public function editPost($id)
    {
        $post = Post::findOrFail($id);
        $categories = Category::where('type', 'post')->get();

        return Inertia::render('Admin/PostForm', [
            'categories' => $categories,
            'post' => $post,
        ]);
    }

    public function updatePost(Request $request, $id)
    {
        $post = Post::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            'excerpt' => 'nullable|string|max:500',
            'thumbnail' => 'nullable|file|image|max:2048',
            'category_id' => 'nullable|exists:categories,id',
            'status' => 'required|in:draft,published',
            'is_featured' => 'boolean',
        ]);

        if ($request->hasFile('thumbnail')) {
            $validated['thumbnail'] = $request->file('thumbnail')->store('posts', 'public');
        }

        $validated['slug'] = Str::slug($validated['title']);
        
        if ($validated['status'] === 'published' && !$post->published_at) {
            $validated['published_at'] = now();
        }

        $post->update($validated);

        return redirect()->route('admin.posts')->with('success', 'Post updated successfully.');
    }

    public function deletePost($id)
    {
        $post = Post::findOrFail($id);
        $post->delete();

        return redirect()->route('admin.posts')->with('success', 'Post deleted successfully.');
    }

    public function categories(Request $request)
    {
        $categories = Category::where('type', 'post')
            ->orderBy('name')
            ->paginate(10);

        return Inertia::render('Admin/Categories', [
            'categories' => $categories,
        ]);
    }

    public function storeCategory(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'type' => 'required|in:post,event',
        ]);

        $validated['slug'] = Str::slug($validated['name']);
        Category::create($validated);

        return redirect()->route('admin.categories')->with('success', 'Category created successfully.');
    }

    public function deleteCategory($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return redirect()->route('admin.categories')->with('success', 'Category deleted successfully.');
    }

    public function events(Request $request)
    {
        $events = Event::with('category', 'organizer')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return Inertia::render('Admin/Events', [
            'events' => $events,
        ]);
    }

    public function storeEvent(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required',
            'content' => 'nullable',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'location' => 'required|string|max:255',
            'location_address' => 'nullable|string',
            'thumbnail' => 'nullable|file|image|max:2048',
            'category_id' => 'nullable|exists:categories,id',
            'status' => 'required|in:upcoming,ongoing,finished',
            'is_featured' => 'boolean',
        ]);

        if ($request->hasFile('thumbnail')) {
            $validated['thumbnail'] = $request->file('thumbnail')->store('events', 'public');
        }

        $validated['slug'] = Str::slug($validated['title']);
        $validated['organizer_id'] = auth()->id();

        Event::create($validated);

        return redirect()->route('admin.events')->with('success', 'Event created successfully.');
    }

    public function editEvent($id)
    {
        $event = Event::findOrFail($id);
        $categories = Category::where('type', 'event')->get();

        return Inertia::render('Admin/EventForm', [
            'categories' => $categories,
            'event' => $event,
        ]);
    }

    public function updateEvent(Request $request, $id)
    {
        $event = Event::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required',
            'content' => 'nullable',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'location' => 'required|string|max:255',
            'location_address' => 'nullable|string',
            'thumbnail' => 'nullable|file|image|max:2048',
            'category_id' => 'nullable|exists:categories,id',
            'status' => 'required|in:upcoming,ongoing,finished',
            'is_featured' => 'boolean',
        ]);

        if ($request->hasFile('thumbnail')) {
            $validated['thumbnail'] = $request->file('thumbnail')->store('events', 'public');
        }

        $validated['slug'] = Str::slug($validated['title']);

        $event->update($validated);

        return redirect()->route('admin.events')->with('success', 'Event updated successfully.');
    }

    public function deleteEvent($id)
    {
        $event = Event::findOrFail($id);
        $event->delete();

        return redirect()->route('admin.events')->with('success', 'Event deleted successfully.');
    }

    public function galleries(Request $request)
    {
        $galleries = Gallery::with('album')
            ->orderBy('created_at', 'desc')
            ->paginate(20);

        $albums = \App\Models\Album::all();

        return Inertia::render('Admin/Galleries', [
            'galleries' => $galleries,
            'albums' => $albums,
        ]);
    }

    public function storeGallery(Request $request)
    {
        $validated = $request->validate([
            'image' => 'required|file|image|max:2048',
            'album_id' => 'nullable|exists:albums,id',
            'caption' => 'nullable|string',
        ]);

        if ($request->hasFile('image')) {
            $validated['image_path'] = $request->file('image')->store('galleries', 'public');
        }

        Gallery::create($validated);

        return redirect()->route('admin.galleries')->with('success', 'Image uploaded successfully.');
    }

    public function deleteGallery($id)
    {
        $gallery = Gallery::findOrFail($id);
        $gallery->delete();

        return redirect()->route('admin.galleries')->with('success', 'Image deleted successfully.');
    }

    public function members(Request $request)
    {
        $members = Member::orderBy('position_level')->orderBy('order')->paginate(20);

        return Inertia::render('Admin/Members', [
            'members' => $members,
        ]);
    }

    public function storeMember(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'position_level' => 'required|integer',
            'photo' => 'nullable|file|image|max:2048',
            'bio' => 'nullable|string',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email',
            'is_active' => 'boolean',
        ]);

        if ($request->hasFile('photo')) {
            $validated['photo'] = $request->file('photo')->store('members', 'public');
        }

        Member::create($validated);

        return redirect()->route('admin.members')->with('success', 'Member added successfully.');
    }

    public function editMember($id)
    {
        $member = Member::findOrFail($id);

        return Inertia::render('Admin/MemberForm', [
            'member' => $member,
        ]);
    }

    public function updateMember(Request $request, $id)
    {
        $member = Member::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'position_level' => 'required|integer',
            'photo' => 'nullable|file|image|max:2048',
            'bio' => 'nullable|string',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email',
            'is_active' => 'boolean',
        ]);

        if ($request->hasFile('photo')) {
            $validated['photo'] = $request->file('photo')->store('members', 'public');
        }

        $member->update($validated);

        return redirect()->route('admin.members')->with('success', 'Member updated successfully.');
    }

    public function deleteMember($id)
    {
        $member = Member::findOrFail($id);
        $member->delete();

        return redirect()->route('admin.members')->with('success', 'Member deleted successfully.');
    }

    public function donations()
    {
        $donations = Donation::with('approver')
            ->orderBy('created_at', 'desc')
            ->paginate(20);

        return Inertia::render('Admin/Donations', [
            'donations' => $donations,
        ]);
    }

    public function approveDonation($id)
    {
        $donation = Donation::findOrFail($id);
        $donation->update([
            'status' => 'approved',
            'approved_by' => auth()->id(),
            'approved_at' => now(),
        ]);

        return redirect()->route('admin.donations')->with('success', 'Donation approved.');
    }

    public function rejectDonation($id)
    {
        $donation = Donation::findOrFail($id);
        $donation->update([
            'status' => 'rejected',
            'approved_by' => auth()->id(),
            'approved_at' => now(),
        ]);

        return redirect()->route('admin.donations')->with('success', 'Donation rejected.');
    }

    public function users()
    {
        $users = User::with('roles')->paginate(20);
        $roles = \Spatie\Permission\Models\Role::all();

        return Inertia::render('Admin/Users', [
            'users' => $users,
            'roles' => $roles,
        ]);
    }

    public function assignRole(Request $request, $id)
    {
        $user = User::findOrFail($id);
        
        $request->validate([
            'role' => 'nullable|exists:roles,name',
        ]);

        if ($request->role) {
            $user->assignRole($request->role);
        } else {
            $user->syncRoles([]);
        }

        return redirect()->route('admin.users')->with('success', 'Role updated successfully.');
    }
}